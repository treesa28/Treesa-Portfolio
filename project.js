
    const projects = {
      powerbi: `
        <h2>Power BI Dashboard</h2>
        <p>This Power BI project demonstrates sales analytics with interactive dashboards.</p>
        <iframe
          src="https://app.powerbi.com/view?r=YOUR_REPORT_ID"
          title="Power BI Dashboard"
          allowfullscreen
        ></iframe>
      `,
      java: `
        <h2>Java Projects</h2>
        <p>Developed various Java applications including Library Management System and Banking System.</p>
        <ul>
          <li>Library Management System with JDBC and Swing</li>
          <li>Bank Account Management Console App</li>
          <li>Multithreaded Java Applications</li>
        </ul>
      `,
      python: `
        <h2>Python Projects</h2>
        <p>Projects include automation scripts and data analysis tools.</p>
        <ul>
          <li>Web scraping with BeautifulSoup</li>
          <li>Data analysis with Pandas and Matplotlib</li>
          <li>GUI apps with Tkinter</li>
        </ul>
      `,
      design: `
        <h2>Design Projects</h2>
        <p>Creative web and graphic design projects made using Figma and Adobe Photoshop.</p>
        <ul>
          <li>Portfolio website UI/UX design</li>
          <li>Logo and branding for small businesses</li>
          <li>Poster and social media graphics</li>
        </ul>
      `,
    };

    // Function to show selected project content
    function showProject(projectKey) {
      // Update content
      const detailDiv = document.getElementById('project-detail');
      detailDiv.innerHTML = projects[projectKey] || '<p>Project not found.</p>';

      // Update active button styles
      document.querySelectorAll('.project-menu button').forEach((btn) => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
    }

    // Show default project on page load
    window.onload = () => showProject('powerbi');