const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/bingo',
    {
        branch: 'deploy',
        repo: 'https://github.com/sprinteins/Bingo.git',
        user: {
            name: 'trusz',
            email: 't.rusz@sprinteins.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
