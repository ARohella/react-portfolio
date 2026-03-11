import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2025 - Aug 2025"
            iconStyle={{ background: '#BF5700', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SWE Intern - Wire Transfer Team</h3>
            <h4 className="vertical-timeline-element-subtitle">Charles Schwab | Southlake, TX</h4>
            <p>
              C#/.NET 8, REST APIs, Business Rule Development, CI/CD, Agile
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025"
            iconStyle={{ background: '#BF5700', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Resident Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">UTCS Academy for Machine Learning | Austin, TX</h4>
            <p>
              ML Mentorship, Program Logistics, Technical Workshop Coordination
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025 - Nov 2025"
            iconStyle={{ background: '#BF5700', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Fintech Foundations Program Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">Visa | Austin, TX</h4>
            <p>
              Fintech Innovation, Case Studies, Capstone (3rd Place)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2024 - Oct 2025"
            iconStyle={{ background: '#BF5700', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Living with Robots Laboratory, Texas Robotics | Austin, TX</h4>
            <p>
              Human-Robot Interaction, NLP, Machine Learning, ASR Pipelines
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024"
            iconStyle={{ background: '#BF5700', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Program Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">The UTCS Academy for Robotics | Austin, TX</h4>
            <p>
              Robotics Education, Linux, C++, Arduino, PID Control
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
