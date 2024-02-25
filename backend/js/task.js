
/**
 * Task 1
 * The first task is to implement the leafFiles function, which takes in a list of files and returns a list containing the names of all leaf files, that is, files which have no children.
 * The file names can be returned in any order.
 */
function leafFiles(files) {
    return files.filter(file => !files.some(child => child.parent === file.id)).map(file => file.name);
}

/**
 * Task 2
 * The second task is to implement the kLargestCategories function, which takes in a list of files and a number k and returns a list containing the k categories that have the most files.
 * This list should be returned in descending order of size. If multiple categories have the same size, they should be ordered alphabetically. If there are less than k categories in the list of files, the returned list should contain all categories.
 */
function kLargestCategories(files, k) {
    const categoryCounts = {};

    files.forEach(file => {file.categories.forEach(category => {categoryCounts[category] = (categoryCounts[category] || 0) + 1})});

    const sorted = Object.keys(categoryCounts).sort((a, b) => {
            return (categoryCounts[b] - categoryCounts[a]) !== 0 ? (categoryCounts[b] - categoryCounts[a]) : a.localeCompare(b);
        });
    
    if (sorted.length < k) {
        return sorted;
    }

    return sorted.slice(0, k);
}

/**
 * Task 3
 * The third and final task is to implement the largestFileSize function, which returns the size of the file with the largest total size. Total size includes the size of all children files (this includes grandchildren etc.).
 * If there are no files, this function should return 0.
 */
function largestFileSize(files) {
    let maxSize = 0;

    for (const file of files) {
        const totalSize = calculateTotalSize(file, files);
        maxSize = Math.max(maxSize, totalSize);
    }

    return maxSize;
}

function calculateTotalSize(file, files) {
    let totalSize = file.size;
    
    const children = files.filter(child => child.parent === file.id);

    for (const child of children) {
        totalSize += calculateTotalSize(child, files);
    }

    return totalSize;
}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

const testFiles2 = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: -1, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Documents", "Photos"], parent: -1, size: 2048 },
    { id: 3, name: "Folder", categories: ["Documents"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Photos"], parent: 21, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Folder"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Folder"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Folder", "Photos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Photos"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Photos"], parent: 89, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Photos", "Folder"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Folder"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];


console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

console.assert(arraysEqual(
    leafFiles(testFiles2).sort((a, b) => a.localeCompare(b)),
    [
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx"
    ]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles2, 2),
    ["Documents", "Folder"]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles2, 4),
    ["Documents", "Folder", "Photos"]
));

console.assert(largestFileSize(testFiles) == 20992)

console.assert(largestFileSize(testFiles2) == 19456)

