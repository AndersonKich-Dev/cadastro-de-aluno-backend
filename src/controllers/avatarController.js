const connection = require('../database/connection')
const fs = require('fs')
const path = require('path')

module.exports = {
    
    remove(request, response){
        const uploadId = request.params.id

        const file = path.resolve(__dirname, '..' ,'tmp', 'uploads', `${uploadId}`)
            if(file){
                fs.unlinkSync(file)
            } 

    }
}