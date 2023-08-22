module.exports = function Sortmiddleware(req, res, next) {
    res.locals._sort = {
        enable: false,
        type: 'default'
    }

    if (req.query.hasOwnProperty('_sort')) {
        res.locals._sort.enable = true
        res.locals._sort.type = req.query.type
        res.locals._sort.colummn = req.query.colummn

    }

    next()
}