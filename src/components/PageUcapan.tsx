import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useRsvp } from '../hooks/useRsvp';
import { useWedding } from '../context/WeddingContext';

export const PageUcapan: React.FC = () => {
  const { guestName } = useWedding();
  const { rsvpList, loading, submitting, submitRsvp, attendanceCount } = useRsvp();

  const [name, setName] = useState(guestName !== 'Tamu Terhormat' ? guestName : '');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const sectionRef = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message || !attendance) return;

    try {
      await submitRsvp({
        name: name.trim(),
        message: message.trim(),
        attendance: attendance as 'Hadir' | 'Tidak Hadir',
        guestParam: guestName,
      });
      setMessage('');
      setAttendance('');
      setSuccessMsg('Ucapan berhasil dikirim! 🎉');
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch {
      alert('Gagal mengirim ucapan. Silakan coba lagi.');
    }
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden py-12 px-5"
      style={{ backgroundColor: '#FDF5E6' }}
    >
      <div className="w-full flex flex-col items-center gap-6">
        {/* Header Card */}
        <div
          className="w-full flex flex-col items-center py-16 px-5 gap-6 rounded-[20px]"
          style={{
            backgroundColor: 'rgba(143,168,150,0.8)',
            border: '4px double #E8C4C4',
            boxShadow: '0 0 10px 6px rgba(0,0,0,0.2) inset',
          }}
        >
          <h2
            className="text-[#2D5A4D] text-[36px] font-normal"
            style={{ fontFamily: 'Philosopher, sans-serif' }}
          >
            Doa dan Ucapan
          </h2>

          <p
            className="text-white text-[13px] text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Berikan ucapan harapan dan do'a kepada kedua mempelai
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 text-white text-[14px] font-medium px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: 'linear-gradient(180deg, #E8C4C4 0%, #D4A5A5 100%)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4">
              <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" />
            </svg>
            {loading ? '...' : `${rsvpList.length} Comments`}
          </button>
        </div>

        {/* Form & List (tampil saat showForm = true) */}
        {showForm && (
          <div
            className="w-full flex flex-col items-center py-6 px-5 gap-6 rounded-[20px]"
            style={{
              backgroundColor: 'rgba(143,168,150,0.8)',
              border: '4px double #E8C4C4',
              boxShadow: '0 0 10px 6px rgba(0,0,0,0.2) inset',
            }}
          >
            {/* Attendance Count */}
            <div className="flex gap-4 w-full justify-center">
              <div
                className="flex flex-col items-center px-6 py-3 rounded-[8px]"
                style={{ backgroundColor: '#8FA896' }}
              >
                <span className="text-white text-[24px] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {attendanceCount.hadir}
                </span>
                <span className="text-white text-[12px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hadir
                </span>
              </div>
              <div
                className="flex flex-col items-center px-6 py-3 rounded-[8px]"
                style={{ backgroundColor: '#E8C4C4' }}
              >
                <span className="text-white text-[24px] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {attendanceCount.tidakHadir}
                </span>
                <span className="text-white text-[12px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Tidak Hadir
                </span>
              </div>
            </div>

            {/* Success Message */}
            {successMsg && (
              <div
                className="w-full text-center py-3 px-4 rounded-[8px] text-white text-[13px]"
                style={{ backgroundColor: '#2D5A4D', fontFamily: 'Poppins, sans-serif' }}
              >
                {successMsg}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-[8px] text-[13px]"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', fontFamily: 'Poppins, sans-serif' }}
              />
              <textarea
                placeholder="Ucapan"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-[8px] text-[13px] resize-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', fontFamily: 'Poppins, sans-serif' }}
              />
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-[8px] text-[13px]"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', fontFamily: 'Poppins, sans-serif' }}
              >
                <option value="" disabled>Konfirmasi Kehadiran</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-[8px] text-white text-[14px] font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #E8C4C4 0%, #D4A5A5 100%)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {submitting ? 'Mengirim...' : 'Kirim'}
              </button>
            </form>

            {/* Comments List */}
            {rsvpList.length > 0 && (
              <div className="w-full flex flex-col gap-4 mt-4">
                {rsvpList.map((entry, index) => (
                  <div
                    key={entry.id ?? index}
                    className="w-full p-4 rounded-[8px]"
                    style={{
                      backgroundColor: 'rgba(143,168,150,0.8)',
                      border: '2px solid #E8C4C4',
                    }}
                  >
                    <p
                      className="text-[#2D5A4D] text-[14px] font-semibold mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {entry.name}
                    </p>
                    <p
                      className="text-white text-[13px] mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {entry.message}
                    </p>
                    <span
                      className="text-[12px] px-3 py-1 rounded-[4px] text-white"
                      style={{
                        backgroundColor: entry.attendance === 'Hadir' ? '#8FA896' : '#E8C4C4',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {entry.attendance}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
