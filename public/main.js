$(document).ready(function () {
    $('#title').autocomplete({
        source: async function(req, res) {
            let data = await fetch(`http://localhost:8002/search?query=${req.term}`)
                .then(results = results.json())
                .then(results = results.map(result => {
                    return {
                        label: result.title,
                        value: result.title, 
                        id: result._id
                    }
                }))
                res(data)
        },
    })
})