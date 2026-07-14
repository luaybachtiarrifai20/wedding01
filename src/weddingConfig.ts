import couplePhoto from "./assets/hero.png";
import photoGroom from "../images/pria.png";
import photoBride from "../images/wanita.png";
import photo1 from "../images/gallery1.png";
import photo2 from "../images/gallery2.png";
import photo3 from "../images/gallery3.png";
import photo4 from "../images/gallery4.png";

export const weddingConfig = {
  // Front
  front: {
    names: "Indra & July",
    photo: couplePhoto,
  },

  // Couple Section
  couple: {
    names: "Indra & July",
    date: "Jumat, 21 Agustus 2026",
    photo: couplePhoto,
  },

  // Mempelai Section
  mempelai: {
    quote:
      "Berawal sebagai rekan kerja, kami menghabiskan waktu bertahun-tahun sebagai teman. Seiring seringnya bekerja dalam proyek yang sama, kami semakin mengenal satu sama lain. Dari sebuah pertemanan, membawa kami pada keputusan untuk melangkah bersama dalam ikatan pernikahan.",
    quoteReference: "",
    groom: {
      name: "Indra Lukman Permana",
      description: "Anak Ke-4 dari<br/>Bapak Idan &amp; Ibu Suryaningsih",
      photo: photoGroom,
      instagram: "https://instagram.com/indralukmanp",
    },
    bride: {
      name: "July Melati Puteri",
      description:
        "Anak Ke-2 dari<br/>Bapak Jemi Wulur &amp; Ibu Susi Walini (Almh)",
      photo: photoBride,
      instagram: "https://instagram.com/julyputeri",
    },
  },

  // Acara Section
  acara: {
    weddingDate: new Date("2026-08-21T09:00:00"),
    akadNikah: {
      title: "Akad Nikah",
      date: "Jumat, 21 Agustus 2026",
      time: "09.00 WIB",
      location: "Cafe Dudukdulu, Jln. Sepakat 2, Samping Gang WP",
      mapsUrl: "",
    },
    resepsi: {
      title: "Resepsi",
      date: "Sabtu, 22 Agustus 2026",
      time: "14.00 - 18.00 WIB",
      location:
        "Gedung Palang Merah Indonesia (PMI) Provinsi Kalbar, Jl. Letnan Jendral Sutoyo No.12",
      mapsUrl: "https://maps.app.goo.gl/mHaZ4kboRZrieBF96?g_st=iw",
    },
  },

  // Galeri Section
  galeri: {
    photos: [photo1, photo2, photo3, photo4],
  },

  // Penutup Section
  penutup: {
    names: "Indra & July",
    socialMedia: {
      instagram: "https://instagram.com/julyputeri",
      whatsapp: "https://wa.me/message/",
    },
  },

  // Gift Section
  gift: {
    bankAccount: {
      bankName: "MANDIRI",
      accountNumber: "1460016871464",
      accountName: "July Melati Puteri",
      chipImage: "chip-atm-1-2-1-1-1-1.png",
      bankLogo: "BANK-BRI-1.png",
    },
    giftShipping: {
      recipientName: "July Melati Puteri",
      phoneNumber: "",
      address: "",
    },
  },
};
