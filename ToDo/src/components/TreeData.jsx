const treeData = [
    {
        id: '1',
        name: 'root',
        type: 'folder',
        children: [
            {
                id: '2',
                name: 'folder1',
                type: 'folder',
                children: [
                    {
                        id: '3',
                        name: 'file1.txt',
                        type: 'file'
                    },
                    {
                        id: '4',
                        name: 'file2.txt',
                        type: 'file'
                    }
                ]
            },
            {
                id: '5',
                name: 'folder2',
                type: 'folder',
                children: [
                    {
                        id: '6',
                        name: 'file3.txt',
                        type: 'file'
                    }
                ]
            }
        ]
    }
];

export default treeData