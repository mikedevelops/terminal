/**
 * Config
 */

export default {
    name: 'Michael Smart',
    location: 'Leicester, United Kingdom',
    job: 'Javascript Developer',
    employer: 'Effect Digital',
    github: 'https://github.com/mikedevelops',
    twitter: 'https://twitter.com/mikedevelops',
    directories: {
        portfolio: [
            { name: 'about.json', perms: '-rw-r--r--', type: 'file' },
            { name: 'contact.sh', perms: '-rw-r--r--', type: 'script' },
            { name: 'blog', perms: 'drwxr-xr-x', type: 'dir' }
        ]
    }
}
