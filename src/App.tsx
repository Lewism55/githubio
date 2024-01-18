import { motion } from "framer-motion";
import { useState } from "react";

// Import your components
import Profile from './components/Profile';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';

const sidebarOptions = ['Profile', 'Skills', 'Portfolio', 'Experience', 'Education'];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Profile');

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

  const renderComponent = () => {
    switch(selectedOption) {
      case 'Profile':
        return <Profile />;
      case 'Skills':
        return <Skills />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      default:
        return <Profile />;
    }
  }

  const renderSidebarOption = (option: string) => {
    return <motion.div
      className="sidebar-option"
      onClick={() => handleOptionClick(option)}
      whileHover="hover"
      whileTap="tap"
      variants={sidebarOptionVariants}
      key={option}
    >
      {option}
    </motion.div>
  }

  return (
    <div className="App">
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
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;