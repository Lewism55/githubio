import { motion, useAnimation} from "framer-motion";
import { useState, useEffect } from "react";
import Profile from './components/Profile';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';

const sidebarOptions = ['Profile', 'Skills', 'Portfolio', 'Experience', 'Education'];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Profile');

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: ["#292929", "#202020", '#252525', "#292929"],
      transition: { duration: 2, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  const sidebarOptionVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const renderComponent = () => {
    let Component;
    switch(selectedOption) {
      case 'Profile':
        Component = Profile;
        break;
      case 'Skills':
        Component = Skills;
        break;
      case 'Portfolio':
        Component = Portfolio;
        break;
      case 'Experience':
        Component = Experience;
        break;
      case 'Education':
        Component = Education;
        break;
      default:
        Component = Profile;
    }
  
    return (
      <motion.div
        className="content"
        key={selectedOption}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Component />
      </motion.div>
    );
  }

  const renderSidebarOption = (option: string) => {
    return <motion.h1
      className="sidebar-option"
      onClick={() => handleOptionClick(option)}
      whileHover="hover"
      whileTap="tap"
      variants={sidebarOptionVariants}
      key={option}
    >
      {option}
    </motion.h1>
  }

  return (
    <motion.div animate={controls} style={{ width: "100%", height: "100vh" }} className="App">
      <div className={`burger ${isOpen ? 'open' : ''}`}  onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <motion.div
        className="sidebar"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
        style={{ zIndex: 2 }}
      >
        {sidebarOptions.map((option) => renderSidebarOption(option))}
      </motion.div>
      {renderComponent()}
    </motion.div>
  );
}

export default App;