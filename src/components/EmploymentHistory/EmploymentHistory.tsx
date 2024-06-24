
import './EmploymentHistory.scss';


export function EmploymentHistory() {
  return <div className='employment-history'>
    <h1>Employment and Education History</h1>

    <div className="timeline">
      
      <div className="container left">
        <div className="content">
          <h2>Sweetwater</h2>
          <p>March 2022 - Present</p>
          <p>Data Scientist</p>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <h2>Core BTS</h2>
          <p>December 2020 - March 2022</p>
          <p>Fullstack Web Developer</p>
        </div>
      </div>

      <div className="container left">
        <div className="content">
          <h2>Master of Science</h2>
          <p>August 2019 - Decemer 2020</p>
          <p>University of Cincinnati</p>
          <p>Computer Science</p>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <h2>Bachelor of Science</h2>
          <p>August 2015 - August 2019</p>
          <p>University of Cincinnati</p>
          <p>Computer Science</p>
        </div>
      </div>

    </div>
  </div>;
}
