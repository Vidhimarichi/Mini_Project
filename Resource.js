// Function to simulate viewing a resource
function viewResource(resourceId) {
    let resourceDetails = "";

    switch(resourceId) {
        case '1':
            resourceDetails = `
                <h2>Water Conservation Techniques</h2>
                <p><strong>Full Article:</strong> Water is a crucial resource in farming. To conserve water and improve crop productivity, farmers can adopt techniques such as:</p>
                <ul>
                    <li>Drip irrigation systems</li>
                    <li>Rainwater harvesting</li>
                    <li>Mulching</li>
                    <li>Efficient irrigation scheduling</li>
                    <li>Using drought-resistant crops</li>
                </ul>
                <p>Implementing these techniques will help save water and improve crop yield, especially in regions with water scarcity.</p>
            `;
            break;
        case '2':
            resourceDetails = `
                <h2>Sustainable Farming Practices</h2>
                <p><strong>Full Article:</strong> Sustainable farming practices are key to maintaining the health of the land and producing crops in an eco-friendly manner. Some of the practices include:</p>
                <ul>
                    <li>Organic farming</li>
                    <li>Integrated pest management</li>
                    <li>Conservation tillage</li>
                    <li>Agroforestry</li>
                    <li>Soil health management</li>
                </ul>
                <p>These practices help reduce the environmental impact of farming and ensure long-term productivity.</p>
            `;
            break;
        case '3':
            resourceDetails = `
                <h2>Crop Rotation Benefits</h2>
                <p><strong>Full Article:</strong> Crop rotation is a practice where different types of crops are grown in the same area in a planned sequence. It offers many benefits, such as:</p>
                <ul>
                    <li>Improving soil fertility</li>
                    <li>Breaking pest cycles</li>
                    <li>Reducing soil erosion</li>
                    <li>Enhancing biodiversity</li>
                </ul>
                <p>By rotating crops, farmers can maintain soil health and avoid the depletion of nutrients that can occur when growing the same crop repeatedly.</p>
            `;
            break;
        case '4':
            resourceDetails = `
                <h2>Innovative Agricultural Technologies</h2>
                <p><strong>Full Article:</strong> The agricultural industry is rapidly evolving with the help of technology. Some key innovations include:</p>
                <ul>
                    <li>Precision agriculture using drones</li>
                    <li>AI and machine learning in farm management</li>
                    <li>Robotics for harvesting and planting</li>
                    <li>Biotechnology for better crops</li>
                    <li>Blockchain for supply chain transparency</li>
                </ul>
                <p>These technologies not only improve efficiency but also ensure sustainability in agriculture.</p>
            `;
            break;
        default:
            resourceDetails = "<p>Resource not found.</p>";
            break;
    }

    // Display the resource details (this can be done in a modal or a new page, here we are using an alert for simplicity)
    alert(resourceDetails);
}
