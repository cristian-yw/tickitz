  const API_KEY = 'ed78f89fe600b81ba90ece621fa65990';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

let genreMap = {};


async function loadGenres() {
    try {
        const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        const genres = res.data.genres;
        genres.forEach(g => {
            genreMap[g.id] = g.name;
        });
    } catch (err) {
        console.error('Gagal memuat genres:', err);
    }
}
 async function loadMovies() {
  try {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const movies = res.data.results;
    const container = document.getElementById('movie-list');

    container.innerHTML = movies.map(m => `
      <div class="relative group bg-white rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="${IMG_BASE + m.poster_path}" alt="${m.title}" class="w-full h-auto" />
        
        <!-- Hover Buttons -->
        <div class="absolute inset-0 bg-black bg-opacity-50 flex-col justify-center items-center opacity-0 group-hover:opacity-100 flex transition">
          <a href="/pages/detail/detail.html?id=${m.id}" class="mb-2 px-4 py-2 border text-white rounded hover:bg-white hover:text-black transition">Details</a>
          <a href="/pages/oder/order.html?id=${m.id}" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Buy Ticket</a>
        </div>

        <!-- Title & Genre -->
        <div class="p-3">
          <h4 class="text-sm font-semibold ">${m.title}</h4>
          <div class="flex flex-wrap gap-1 mt-2">
            ${m.genre_ids.map(id => `
              <span class="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                ${genreMap[id]}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error('Failed to load movies:', err);
  }
}
async function init() {
    await loadGenres()
    await loadMovies()
}
init()