// import React, { useState} from 'react'
import Logo from './components/atoms/logo/Logo.jsx'
import Button from './components/atoms/button/Button.jsx'
import ThemeToggle from './components/atoms/toggle/ThemeToggle.jsx'
import {HeartReactIcon, ContactLinkPhoneIcon, ContactLinkEmailIcon, ContactLinkWhatsappIcon, FullscreenIcon, SunIcon, MoonIcon, TagHeartFillIcon, TagClockIcon, TagEyeIcon, DropdownIcon, ArrowLeftIcon, ArrowRightIcon} from './assets/icons/system'
import Text from './components/atoms/text/Text.jsx'
import NavigationItem from './components/atoms/navigationitem/NavigationItem.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Tag from './components/atoms/tag/Tag.jsx'
import Avatar from './components/atoms/avatar/Avatar.jsx'
import FormField from './components/atoms/formfield/FormField.jsx'
// import { useForm } from 'react-hook-form'
// import {headerNavItems}  from './data/navigation/headerNav.js'
import NavigationList from './components/molecules/navigationlist/NavigationList.jsx'
import HeroImageBlock from './components/molecules/heroimageblock/HeroImageBlock.jsx'
// import avatarTestImage from './assets/images/avatartest.png'
// import heroImgeTest from'./assets/images/hero/home-hero.svg'
import HeroTextBlock from './components/molecules/herotextblock/HeroTextBlock.jsx'
 import AboutTextBlock from './components/molecules/abouttextblock/AboutTextBlock.jsx'
import AboutCardBlock from './components/molecules/aboutcardblock/AboutCardBlock.jsx'
import WorkExperienceCardBlock from './components/molecules/workexperiencecardblock/WorkExperienceCardBlock.jsx'
import WorkExperienceTextBlock from './components/molecules/workexperiencetextblock/WorkExperienceTextBlock.jsx'
import SkillsCardBlock from './components/molecules/skillscardblock/SkillsCardBlock.jsx'
import SkillsTextBlock from './components/molecules/skillstextblock/SkillsTextBlock.jsx'
import ProjectsCarouselBlock from './components/molecules/projectscarousalblock/ProjectsCarouselBlock.jsx'
import ProjectsTextBlock from './components/molecules/projectstextblock/ProjectsTextBlock.jsx'
import ContactTextBlock from './components/molecules/contacttextblock/ContactTextBlock.jsx'
import ContactFormBlock from './components/molecules/contactformblock/ContactFormBlock.jsx'
import Paginaiton from './components/molecules/pagination/Paginaton.jsx'
import Header from './components/organisms/header/Header.jsx'
// import { headerNavItems } from './data/navigation/headerNav.js'
// import { footer } from './data/navigation/footer.js'
import Footer from './components/organisms/footer/Footer.jsx'
Footer
import HeroSecion from './components/organisms/herosecion/HeroSection.jsx'
import { homeHeroText } from './data/home/homeHeroText.js'
import homeHero from './assets/images/hero/home-hero.svg'

function App() {
  // const {register, control} = useForm();
  // const {register, } = useForm();
  // const {control} = useForm();
  // const [currentPage, setCurrentPage] = useState(1);


  return (
    <div className="
    inline-flex items-center flex-col justify-center gap-10 w-full

    max-w-(--size-section-wrapper-mobile-max-width)
    sm:max-w-(--size-section-wrapper-tablet-max-width)
    lg:max-w-(--size-section-wrapper-desktop-max-width)

    px-(--spacing-section-wrapper-mobile-padding-x)
    sm:px-(--spacing-section-wrapper-tablet-padding-x)
    lg:px-(--spacing-section-wrapper-desktop-padding-x)

    py-(--spacing-section-wrapper-mobile-padding-y)
    sm:py-(--spacing-section-wrapper-tablet-padding-y)
    lg:py-(--spacing-section-wrapper-desktop-padding-x)
    "
    >
      
      <ThemeToggle />
    
      {/* <Logo theme="light" /> */}
      
      {/* <Button label="+917908137571" isDisabled={false} variant="link" iconLeft={<ContactLinkPhoneIcon/>}  /> */}

      {/* <Button label="Click me" isDisabled={false} variant="overlay" /> */}
{/*     
      <Text variant="heading3"  text="Hello world !"
        icon={MoonIcon}/> */}

{/*        
        <div className="inline-flex items-center justify-center gap-10">
          <NavigationItem variant="footer" isButtonStyle={false} label="Home"  to="/" />
          <NavigationItem variant="footer" isButtonStyle={false} label="About"  to="/about" />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes> */}

      {/* <Tag label='Love react' iconLeft={<TagClockIcon/>}/> */}

    {/* <Avatar image={avatarTestImage} /> */}
    {/* <Avatar name='p' /> */}

    {/* <FormField icon={<HeartReactIcon />}/> */}
    {/* <FormField variant="selectCustom" placeholder="Enter your full name" label="Your name" error="Invlaid!" options={[
    { label: "Option One", value: "optionOne" },
    { label: "Option Two", value: "optionTwo" },
    { label: "Option Three", value: "optionThree" }
  ]}/> */}

    {/* <CustomFormField /> */}

    {/* <FormField variant="email" placeholder="Enter your email" register={register("text")}/> */}

    {/* <FormField variant="textarea" placeholder="Enter your email" register={register} name="textarea" 
    rules={{
    maxLength: {
      value: 50,
      message: "Max limit reached!" 
    }
  }}
  error=""
  maxLength={50}
 /> */}

    {/* <FormField
      variant="selectCustom"
      label="Choose an option"
      name="choice"
      placeholder="Select one"
      options={[
        { value: "option1", label: "Option One" },
        { value: "option2", label: "Option Two" },
        { value: "option1", label: "Option One" },
        { value: "option2", label: "Option Two" },
        { value: "option1", label: "Option One" },
        { value: "option2", label: "Option Two" },
      ]}
      control={control}
      error=''
      icon={<DropdownIcon/>}
    /> */}

    {/* <NavigationList items={headerNavItems} variant="header" showCenterGroup splitLastItem /> */}

    {/* <HeroImageBlock src={heroImgeTest}/> */}

    {/* <HeroTextBlock /> */}

      {/* <AboutTextBlock /> */}
      {/* <AboutCardBlock/> */}
      {/* <WorkExperienceCardBlock /> */}
      {/* <WorkExperienceTextBlock /> */}
      {/* <SkillsCardBlock /> */}
      {/* <SkillsTextBlock /> */}
      {/* <ProjectsCarouselBlock /> */}
      {/* <ProjectsTextBlock /> */}
      {/* <ContactTextBlock /> */}
      {/* <ContactFormBlock /> */}
      {/* <Paginaiton
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    */}
{/* 
        <Header 
            navigationItems={{
              variant: "header",
              items: headerNavItems,
              splitLastItem: true,
              showCenterGroup: true
             }}
             showThemeToggle = {true}
            
        /> */}

         {/* <Footer 
            navigationItems={{
              variant: "footer",
              items: footer.navItems,
             }}
             brandTagline={footer.brandTagline}
             quickLinksHeading={footer.quickLinksHeading}
             contactLinksHeading={footer.contactLinksHeading}
             contactLinks={footer.contactLinks}
             availabilityHeading={footer.availabilityHeading}
             availabilityTagline={footer.availabilityTagline}
             copyright={footer.copyright}
        /> */}

        <HeroSecion
          heroTextBlockProps={homeHeroText}
          heroImageBlockProps={{src: homeHero}}
        />
    </div>
  )
}


export default App

// textParts={[
//     { text: "Hello ", color: "primary" },
//     { text: "World", color: "heading" },
//     { text: "!", color: "heading" },
//   ]}
