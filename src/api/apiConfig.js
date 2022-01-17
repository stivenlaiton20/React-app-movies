const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '11eeeee515672949cafba7f7497d1425',
    originalImage: (imgpath) => `https://image.tmdb.org/t/p/original/${imgpath}`,
    w500Image: (imgpath) => `https://image.tmdb.org/t/p/w500/${imgpath}`
}

export default apiConfig;