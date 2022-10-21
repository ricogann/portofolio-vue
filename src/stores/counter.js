import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'project', 
  state: () => ({
    data: [
      {
        slug: 'p1',
        title: 'Reservation Ticket Museum',
        img: 'bg5.png',
        link: 'https://github.com/ricogann/Website-Reservasi-Tiket-Gubug-Wayang',
        tanggal: '14-11-01',
        deskripsi: 'A Reservation ticket online with API payment gateaway Stripe and PHPMailer.'
      },
      {
        slug: 'p2',
        title: 'Booking and Selling Film',
        img: 'bg5.png',
        link: 'https://github.com/ricogann/Final-Project-Kelompok-3',
        tanggal: '14-11-02',
        deskripsi: 'A simple-program booking and selling film with CRUD and all searching and sorting method.'
      },
      {
        slug: 'p3',
        title: 'Tour Guide Virtual Explore Mojokerto',
        img: 'bg5.png',
        link: 'https://github.com/ricogann/Website-Explore-Mojokerto',
        tanggal: '14-11-03',
        deskripsi: 'A web tour guide virtual for someone who doesn’t know where to travel in Mojokerto.'
      },
      {
        slug: 'p4',
        title: 'Burger King Log and Sign Up System',
        img: 'bg5.png',
        link: 'https://github.com/ricogann/ads_accounts',
        tanggal: '14-11-04',
        deskripsi: 'A simple web-project registration and login with verification on email with PHPMailer.'
      }
    ]
  }),
  actions: {},
  getters: {
    getData: ({ data }) => data,
    getDetail: ({ data }) => {
      return (slug) => data.find((project) => project.slug == slug)
    }
  }
})