const cityController = () => ({
  async getAll (req, res) {
    try {
      return res.send('Всё ок')
    } catch (error) {
      throw error
    }
  }
})

export default cityController()