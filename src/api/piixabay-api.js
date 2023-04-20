import axios from 'axios';

const URL = 'https://pixabay.com/api/?q=';
const API_KEY = '34210482-0ff822678977a0c2e2014453a';

export class ImgApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImage() {
    const response = await axios.get(
      `${URL}${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.incrementPage();
    return response.data.hits;
  }

  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}