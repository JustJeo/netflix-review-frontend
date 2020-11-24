const url = `http://localhost:4000/api/v1`

class ReviewModel {
    static all = () => {
        return fetch(`${url}/reviews`).then(res => res.json())
    }
}

export default ReviewModel 