import '../App.css'
import SkillForgeImage from '../assets/hero-image_2.avif';
import { useNavigate } from 'react-router-dom';

function HeroHome()
{
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate('/courses');
    };
    return <>
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 hero-margin" style={{ marginLeft: '20px',width: '99%'}}>
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={SkillForgeImage} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Unlock Your Next Skill with SkillForge</h1>
        <p class="lead">Discover a personalized path to mastering the skills you need. Whether you’re starting fresh or leveling up, we have the perfect course for you.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="y0wlgw" onClick={handleNavigate}>Start Learning Now</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="krkmd" onClick={handleNavigate}>Explore Courses</button>
        </div>
      </div>
    </div>
    </>
}

export default HeroHome;