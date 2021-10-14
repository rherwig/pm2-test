const dotenv = require('dotenv');

dotenv.config();

const {
    SSH_HOST,
    SSH_USER,
    SSH_KEY,
    GIT_REPOSITORY,
    GIT_BRANCH,
    WEB_ROOT,
} = process.env;

module.exports = {
    apps: [
        {
            name: 'test-app',
            script: 'index.js',
            watch: [
                'index.js',
            ],
            ignore_watch: [
                'node_modules',
            ],
            watch_options: {
                followSymlinks: false,
                usePolling: true,
            },
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],

    deploy: {
        production: {
            user: SSH_USER,
            host: SSH_HOST,
            ref: GIT_BRANCH,
            repo: GIT_REPOSITORY,
            path: WEB_ROOT,
            ssh_options: 'ForwardAgent=yes',
            'pre-deploy-local': '',
            'post-deploy': 'npm install',
            'pre-setup': 'ssh-add -L',
        },
    },
};
