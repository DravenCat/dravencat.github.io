import "./project.css";
import HomePageHeader from "../../component/homePageHeader/homePageHeader";
import DescriptionCard from "../../component/descriptionCard/descriptionCard";
import Navigation from "../../component/navigation/navigation";

import EmpowerUAfrica from "../../images/imgs/EmpowerUAfrica.png";
import SlackerTracker from "../../images/imgs/slackertracker.png";
import Zoomer from "../../images/imgs/zoomer.png";
import Pintos from "../../images/imgs/pintos.png";
import Background from "../../images/backgrouds/background.png";
import JDBC from "../../images/imgs/JDBC.png";
import Neo4j from "../../images/imgs/Neo4j.png";
import Mips from "../../images/imgs/mips.png";

function Project() {
  const slackerstrackerDescription = (
    <div>
      <h4 className="subtitle">Description</h4>
      <p>
        This is a web app that help you have a healthier life by tracking your
        daliy event. You can share your weekly slacker data with your friends.
        You will receive a slacker report email every week, which gives you a
        slacker score based on you last week events.
      </p>
      <h4 className="subtitle">Architecture</h4>
      <p>
        The application use React to build the front end. The backend is running
        on Node.js and Express.js and it is connected to the database system
        using Javascript. For the database, this project uses MongoDB.
      </p>
      <h4 className="subtitle">Objective</h4>
      <p>
        <ul>
          <li>
            To create REST API endpoints that are supported by MongoDB database
          </li>
          <li>
            Learn how to use Google API to support optional login function
          </li>
          <li>Explore web socket to implement dynamic data updation </li>
          <li>Learn web workers to create multi-thread web app</li>
          <li>
            Use docker to deploy the app on{" "}
            <a className="content-link" href="https://aws.amazon.com/?nc2=h_lg">
              AWS
            </a>{" "}
            and use Nginx for reverse proxy
          </li>
          <li>To utilize Git, Git Flow, and code style correctly</li>
          <li>Work in a team of three members</li>
        </ul>
      </p>
    </div>
  );

  const empowerUafricaDescription = (
    <div>
      <h4 className="subtitle">Description</h4>
      <p>
        The project is to build a platform to teach aspiring entrepreneurs in
        Africa how to create a successful business. As well as connecting them
        to potential investors in order to enable them to build market-creating
        innovations which tackle their country's biggest challenges with
        technology. For more information, please read the
      </p>
      <h4 className="subtitle">Architecture</h4>
      <p>
        The application uses React to build the front end and connects the
        backend through http requests. The backend is running on Node.js and
        connects to Neo4j and MySql databases.
      </p>
      <h4 className="subtitle">Objective</h4>
      <p>
        <ul>
          <li>Design the application based on MVC structure</li>
          <li>
            Apply agile software development to build a business website and use
            Jira as an Agile tracking tool
          </li>
          <li>Work in a team of five members collaboratively </li>
          <li>To utilize Git, Git Flow, and code style correctly</li>
          <li>Use Postman as a tool to test endpoints for basic behaviour.</li>
        </ul>
      </p>
    </div>
  );

  const zoomerDescription = (
    <div>
      <h4 className="subtitle">Description</h4>
      <p>
        Zoomer is a ride-sharing market with a revolutionary new web app.
        ride-sharing market with a revolutionary new web app called Zoomer.
      </p>
      <h4 className="subtitle">Architecture</h4>
      <p>
        The application has a microservice architecture, containing three
        microservices (backend Java APIs) with an accompanying API Gateway. You
        will be using PostgreSQL, MongoDB, and Neo4J databases for the three
        microservices respectively, and is implemented using the Java Maven
        framework.
      </p>
      <h4 className="subtitle">Objective</h4>
      <p>
        <ul>
          <li>
            To understand general design and purpose of microservice
            architecture
          </li>
          <li>To understand and implement an API gateway</li>
          <li>
            To create REST API endpoints that are supported by Neo4j graph,
            MongoDB, and PostgreSQL databases
          </li>
          <li>To learn and apply CI/CD</li>
          <li>To understand how docker works</li>
        </ul>
      </p>
    </div>
  );
  const pintosDescription = (
    <div>
      <h4 className="subtitle">Description</h4>
      <p>
        Pintos is a simple operating system framework for the 80x86
        architecture. It supports kernel threads, loading and running user
        programs, virtual memory, and a file system. For more details, visit{" "}
        <a className="content-link" href="https://en.wikipedia.org/wiki/Pintos">
          Pintos
        </a>
      </p>
      <h4 className="subtitle">Objective</h4>
      <p>
        <ul>
          <li>
            Refactor the system timer to avoid busy wait, allow priority
            scheduling and multi-level task queue
          </li>
          <li>
            Handle stack memory management for user process and implement
            syscall handler to support system calls
          </li>
          <li>
            Restructure the memory system to enable lazy loading and use page
            tables to allow virtual memory
          </li>
          <li>
            Apply buffer cache for fast file system interaction and implement an
            extensible filesystem with acyclic-graph directories in Unix/Linux
            structure
          </li>
          <li>
            Use Git flow for version control and work in a team of three members
          </li>
        </ul>
      </p>
    </div>
  );

  const personalDescription = (
    <div>
      <h4 className="subtitle">Description</h4>
      <p>This is my personal website that fully introduces myself.</p>
      <h4 className="subtitle">Objective</h4>
      <p>
        <ul>
          <li>Learn and practic React framework for building front end</li>
          <li>Deploy my website on AWS</li>
          <li>Use Git flow for version control</li>
        </ul>
      </p>
    </div>
  );

  const JDBCDescription = (
    <div>
      <h4 className="subtitle">Description</h4>
      <p>
        A simple JDBC backend that connects to PostgreSQL and handle queries
      </p>
      <h4 className="subtitle">Objective</h4>
      <p>
        <ul>
          <li>Learn how to build a JDBC backend with PostgreSQL</li>
          <li>Practice SQL language (Both DDL and DQL)</li>
        </ul>
      </p>
    </div>
  );

  const neo4jDescription = (
    <div>
      <h4 className="subtitle">Description</h4>
      <p>
        This is a backend for a service that computes six degrees of Kevin
        Bacon. This problem can be restated as finding the shortest path between
        Kevin Bacon and a given actor (via shared movies). It uses a specific
        dependency injection framework (Google Dagger2) and uses Neo4j as the
        database management system.
      </p>
      <h4 className="subtitle">Objective</h4>
      <p>
        <ul>
          <li>Explore NOSQL/Graph Database (Neo4j)</li>
          <li>
            To create REST API endpoints that are supported by Neo4j graph
            databases
          </li>
          <li>To utilize Git, Git Flow, and code style correctly</li>
          <li>
            Practice Enterprise Design Patterns, specifically dependency
            injection
          </li>
          <li>To learn and apply CI/CD</li>
        </ul>
      </p>
    </div>
  );

  return (
    <div className="project-page">
      <Navigation />
      <HomePageHeader name="My Projects" />
      <div className="project-button">
        <div className="project-element">
          <DescriptionCard
            name="SlackerTracker"
            imgLink={SlackerTracker}
            description="An app built by React and Node.js.
          Using MongoDB as Database"
            title="SlackerTracker"
            details={slackerstrackerDescription}
            websiteLink="http://www.slackerstracker.com"
            videoLink="https://youtu.be/qPEEWPazE-k"
            sourceLink="https://github.com/DravenCat/slacker-tracker"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="EmpowerUAfrica"
            imgLink={EmpowerUAfrica}
            description="An app built by React and Node.js.
          Using Neo4j and MySql as Database"
            title="EmpowerUAfrica"
            details={empowerUafricaDescription}
            sourceLink="https://github.com/DravenCat/empoweruAfrica"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Zoomer"
            imgLink={Zoomer}
            description="An app built by Java-HttpServer.
          Using Neo4j, MySql, MongoDB as Database for three different microservice"
            title="Zoomer"
            details={zoomerDescription}
            sourceLink="https://github.com/DravenCat/zoomer"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Pintos"
            imgLink={Pintos}
            description="An operating system framework for the 80 x 86 architecture built by C. Using main design concepts of Linux system."
            title="Pintos"
            details={pintosDescription}
            sourceLink="https://github.com/DravenCat/pintos-projects"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Personal Website"
            imgLink={Background}
            description="My personal website built based on React."
            title="Personal Website"
            details={personalDescription}
            sourceLink="https://github.com/DravenCat/profile_page"
            websiteLink="/profile_page/#"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="JDBC backend"
            imgLink={JDBC}
            description="A JDBC backend connecting to PostgreSQL server."
            title="JDBC backend"
            details={JDBCDescription}
            sourceLink="https://github.com/DravenCat/Postgerbackend"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Neo4j java-httpServer"
            imgLink={Neo4j}
            description="An http server connnecting to Neo4j database."
            title="Neo4j java-httpServer"
            details={neo4jDescription}
            sourceLink="https://github.com/DravenCat/neo4jServer"
          />
        </div>
        <div className="project-element">
          <DescriptionCard
            name="Ailen Attack"
            imgLink={Mips}
            description="A simple horizontal game built by mips assmbly code."
            title="Ailen Attack"
            details="It is similar to some games (also known as “shmups”) that are a classic genre of games: you control a spaceship flying through space and avoiding obstacles, as well as optionally shooting, picking things up, and more. This video shows how it looks like."
            videoLink="https://youtu.be/fDPrMXWOLEI"
            sourceLink="https://github.com/DravenCat/mips_game-"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
