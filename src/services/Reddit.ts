// Cliente de la Api Rest
import axios from 'axios';

const URL = 'https://www.reddit.com/r/marvelstudios.json';

export default {
  /**
   * Obtiene el listado de usuarios
   * @returns Lista de Usuarios
   */
  async fetchAll(): Promise<[]> {
    const response = await axios.get(URL);
    return response.data.data.children;
  },
};
