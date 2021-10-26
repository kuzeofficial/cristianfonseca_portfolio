const protectAPI = (handler) => {
    return async (req, res) => {
        if(new URL(req.headers.referer).origin !== 'https://cristianfonseca.com/') {
            return res.status(403).json({success: false, message: `Forbidden`})
        }
        return handler(req, res)
    }
}

export default protectAPI;