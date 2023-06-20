class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const response = await axios.get(`${this.BASE_URL}/characters`)
    return response.data
  }

  async getOneRegister (id) {
    const response = await axios.get(`${this.BASE_URL}/characters/${id}`)
    return response.data
  }

  async createOneRegister (char) {
    const response = await axios.post(`${this.BASE_URL}/characters/`, char)
    return response.data
  }

  async updateOneRegister (char, id) {
    const response = await axios.put(`${this.BASE_URL}/characters/${id}`, char)
    return response
  }

  async deleteOneRegister (id) {
    const response = await axios.delete(`${this.BASE_URL}/characters/${id}`)
    return response.data
  }
}