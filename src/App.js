// import logo from './logo.svg';
import './App.css';
// import AppMenu from './components/Food menu';
// import FeatureFlags from './components/Feature-flag';
// import FeatureFlagGlobalState from './components/Feature-flag/context';
// import UseFetchTest from './components/Project_17_UseFetchHook/test';
// import UseOnClickOutSideTest from './components/Project_18_UseOutSideClick/test';
// import UseWindowResizeTest from './components/Project_19_UseWindowResizeHook/test';
// import ScrolToBottomTop from './components/Project_20_Scroll_top_and_bottom';
// import ScrollTOLevel from './components/Project_21_ScrollToLevel';

// import TicTacToe from './components/Project_15_TicTakToe';
// import SearchUserApi from './components/Project_14_Search_Auto_Complete';
// import ImageSlider from './components/Project_5_ImageSlider';
// import StarRating from './components/Project_4_starRating';/
// import ScrollIndicators from './components/Project_10_ScrollIndicators';
// import TabTest from './components/Project_11_customTabs/tab-test';
// import ModalTest from './components/Project_12_showModalPopUp/modal-test';
// import GithubProfileFinder from './components/Project_13_GithubUserSearch';
// import LightDarkMode from './components/Project_9_LightDarkMode';
// import RandomColor from './components/Project_3_RandomColor/index.jsx';
// import QRCodeGenerator from './components/Project_8_QRGenerator/index.jsx';
// import Calculator from './components/Project_1_BasicCalculator/index.jsx';
// import Accordian from './components/Project_2_Accordian/index.jsx';
// import LoadMoreButton from './components/Load More Button/index.jsx';
import menus from './components/Project_6_TreeView/data.js';
import TreeView from './components/Project_6_TreeView/index.jsx';

function App() {
  return (
    <div className="App">
  
        {/* {<Calculator />} */}

        {/* {<Accordian />} */}

        {/* {<LoadMoreButton />} */}

        {<TreeView menus={menus}/>}

        {/* {<RandomColor/>} */}

        {/* {<QRCodeGenerator/>} */}

        {/* {<StarRating/>} */}

        {/* {<LightDarkMode/>} */}

        {/* {<ScrollIndicators url={'https://dummyjson.com/products?limit=100'} />} */}

        {/* {<TabTest />} */}

        {/* {<ModalTest/>} */}

        {/* {<GithubProfileFinder />} */}

        {/* {<SearchUserApi />} */}

        {/* {<ImageSlider url={`https://picsum.photos/v2/list`} page={"1"} List={"10"}/>} */}

        {/* {<TicTacToe />} */}

        {/* {<FeatureFlagGlobalState>
          <FeatureFlags />
          </FeatureFlagGlobalState>} */}

        {/* {<UseFetchTest />} */}


        {/* {<UseOnClickOutSideTest />} */}

        {/* {<UseWindowResizeTest />} */}
        
        {/* <ScrolToBottomTop /> */}

        {/* <ScrollTOLevel /> */}

        {/* {<AppMenu/>} */}

    </div>
  );
}

export default App;
