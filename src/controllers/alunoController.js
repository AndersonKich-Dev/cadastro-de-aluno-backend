const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        
        const aluno = {...request.body}
        const id = request.params.id

        if(id){
            await connection('aluno')
                    .update(aluno)
                    .where({id: id})
                    .then(_ => response.status(204).send())
                    .catch(err => response.status(500).send(err))

        }
        else{
            const [id] = await connection('aluno')
                        .insert(aluno)

            return response.json({id});
        }   
    
    },

   async get(request, response){
       await connection('aluno')
            .select('*')
            .then(alunos => response.json(alunos))
            .catch(err => response.status(500).send(err))
   },


   async getById(request, response){
    const id = request.params.id
        await connection('aluno')          
            .select('*')
            .where({'aluno.id': id})          
            .then(aluno => response.json(aluno))
            .catch(err => response.status(500).send(err))


   },


   async remove(request, response){
        const alunoId = request.params.id

        await connection('aluno')
            .where('id', alunoId).del();
             return response.status(204).send();
   }

    

}