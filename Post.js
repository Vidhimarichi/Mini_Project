// Function to simulate "Read More" button click and show full post content
function viewPost(postId) {
    let fullContent = "";

    switch(postId) {
        case '1':
            fullContent = `
                <h2>5 Tips for Sustainable Farming</h2>
                <p><strong>Published on:</strong> December 5, 2024</p>
                <p><strong>Full Article:</strong> Sustainable farming is essential for maintaining the environment. Here are five tips to ensure you are practicing sustainability in your farm:</p>
                <ol>
                    <li>Use organic fertilizers.</li>
                    <li>Practice crop rotation.</li>
                    <li>Water crops efficiently.</li>
                    <li>Compost waste material.</li>
                    <li>Minimize the use of pesticides.</li>
                </ol>
            `;
            break;
        case '2':
            fullContent = `
                <h2>Innovations Revolutionizing Agriculture</h2>
                <p><strong>Published on:</strong> December 3, 2024</p>
                <p><strong>Full Article:</strong> Technology is changing the agricultural landscape. Explore some of the groundbreaking innovations that are transforming farming:</p>
                <ul>
                    <li>Robotic harvesters</li>
                    <li>Precision agriculture using AI</li>
                    <li>Drones for crop monitoring</li>
                    <li>Blockchain in food traceability</li>
                    <li>Vertical farming technologies</li>
                </ul>
            `;
            break;
        case '3':
            fullContent = `
                <h2>Water Conservation Techniques for Farmers</h2>
                <p><strong>Published on:</strong> November 28, 2024</p>
                <p><strong>Full Article:</strong> Water conservation is critical in agriculture. Discover methods that can help farmers save water and increase efficiency:</p>
                <ol>
                    <li>Drip irrigation systems</li>
                    <li>Rainwater harvesting</li>
                    <li>Soil moisture sensors</li>
                    <li>Mulching to reduce evaporation</li>
                    <li>Water-efficient crop selection</li>
                </ol>
            `;
            break;
        case '4':
            fullContent = `
                <h2>How Crop Rotation Benefits Your Soil</h2>
                <p><strong>Published on:</strong> November 20, 2024</p>
                <p><strong>Full Article:</strong> Crop rotation is a practice that can enhance soil health and boost crop yields. Learn why it is important and how to implement it effectively:</p>
                <p>By rotating crops, farmers can maintain soil fertility, reduce pest and disease buildup, and increase biodiversity. It's an essential practice for sustainable farming.</p>
            `;
            break;
        default:
            fullContent = "<p>Post not found.</p>";
            break;
    }

    // Display the full content in a modal or a new section (for simplicity, just alerting here)
    alert(fullContent);
}
