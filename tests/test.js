const request = require('supertest')
const app = require('../app')
describe('Post Endpoints', () => {

    it('should add startup', async () => {
        const res = await request(app)
            .post('/add')
            .send({
                "name": "Emilli francis",
                "startup": "Emilli resturance"
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('name',"id","startup")
    })

    it('should delete startup', async () => {
        const res = await request(app)
            .delete('/delete/4')
           
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name',"id","startup")
    })

    it('should getall startup', async () => {
        const res = await request(app)
            .get('/getall')
           
        expect(res.statusCode).toEqual(200)
        expect(typeof res.body).toBe('object')
        //expect(res.body).toHaveProperty('name',"id","startup")
    })

});