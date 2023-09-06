// fakeApi.js

const fakeApi = {
  getNowPlayingMovies: () => {
    return [
      {
        id: 1,
        title: 'Movie 1',
        description: 'Deskripsi film 1',
        poster: 'link_ke_gambar_poster1.jpg',
      },
      {
        id: 2,
        title: 'Movie 2',
        description: 'Deskripsi film 2',
        poster: 'link_ke_gambar_poster2.jpg',
      },
      // Tambahkan film lainnya di sini...
    ];
  },

  getUpcomingMovies: () => {
    return [
      {
        id: 3,
        title: 'Movie 3',
        description: 'Deskripsi film 3',
        poster: 'link_ke_gambar_poster3.jpg',
      },
      {
        id: 4,
        title: 'Movie 4',
        description: 'Deskripsi film 4',
        poster: 'link_ke_gambar_poster4.jpg',
      },
      // Tambahkan film lainnya di sini...
    ];
  },
};

export default fakeApi;
