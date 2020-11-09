function browserHistory(browserHistory, commands) {
    commands.forEach((command) => {
        if (command === 'Clear History and Cache') {
            browserHistory = {
                ...browserHistory,
                ['Open Tabs']: [],
                ['Recently Closed']: [],
                ['Browser Logs']: [],
            };
        }

        const tokens = command.split(' ');
        const commandName = tokens[0];
        const website = tokens.slice(1).join(' ');

        if (commandName === 'Open') {
            browserHistory['Open Tabs'].push(website);
            browserHistory['Browser Logs'].push(`Open ${website}`);
        } else if (commandName === 'Close') {
            const isOpen = browserHistory['Open Tabs'].find(
                (tab) => tab === website
            );

            if (isOpen) {
                browserHistory['Open Tabs'] = browserHistory[
                    'Open Tabs'
                ].filter((tab) => tab !== website);
                browserHistory['Recently Closed'].push(website);
                browserHistory['Browser Logs'].push(`Close ${website}`);
            }
        }
    });

    console.log(browserHistory['Browser Name']);
    console.log(`Open Tabs: ${browserHistory['Open Tabs'].join(', ')}`);
    console.log(
        `Recently Closed: ${browserHistory['Recently Closed'].join(', ')}`
    );
    console.log(`Browser Logs: ${browserHistory['Browser Logs'].join(', ')}`);
}

browserHistory(
    {
        'Browser Name': 'Google Chrome',
        'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],
        'Recently Closed': ['Yahoo', 'Gmail'],
        'Browser Logs': [
            'Open YouTube',
            'Open Yahoo',
            'Open Google Translate',
            'Close Yahoo',
            'Open Gmail',
            'Close Gmail',
            'Open Facebook',
        ],
    },
    ['Close Facebook', 'Open StackOverFlow', 'Open Google']
);

browserHistory(
    {
        'Browser Name': 'Mozilla Firefox',
        'Open Tabs': ['YouTube'],
        'Recently Closed': ['Gmail', 'Dropbox'],
        'Browser Logs': [
            'Open Gmail',
            'Close Gmail',
            'Open Dropbox',
            'Open YouTube',
            'Close Dropbox',
        ],
    },
    ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);
