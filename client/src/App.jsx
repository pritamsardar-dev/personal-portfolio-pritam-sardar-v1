// import React, { useState} from 'react'
import ThemeToggle from './components/atoms/toggle/ThemeToggle'
import ProjectsSection from './components/sections/shared/projects-section/ProjectsSection'
import {projectsSection} from './data/pages/home/sections/projects'

function App() {
  // const {register, control} = useForm();
  // const {register, } = useForm();
  // const {control} = useForm();
  // const [currentPage, setCurrentPage] = useState(1);


  return (
    // max-w-(--size-section-wrapper-mobile-max-width)
    // sm:max-w-(--size-section-wrapper-tablet-max-width)
    // lg:max-w-(--size-section-wrapper-desktop-max-width)
    // px-(--spacing-section-wrapper-mobile-padding-x)
    // sm:px-(--spacing-section-wrapper-tablet-padding-x)
    // lg:px-(--spacing-section-wrapper-desktop-padding-x)

    // py-(--spacing-section-wrapper-mobile-padding-y)
    // sm:py-(--spacing-section-wrapper-tablet-padding-y)
    // lg:py-(--spacing-section-wrapper-desktop-padding-x)

    <div className="
    inline-flex items-center flex-col justify-center gap-10 w-full

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
        { value: "option3", label: "Option Three" },
        { value: "option4", label: "Option Four" },
        { value: "option5", label: "Option Five" },
        { value: "option6", label: "Option Six" },
      ]}
      control={control}
      error=''
      icon={<DropdownIcon />}
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

        {/* <HeroSecion
          heroTextBlockProps={homeHeroText}
          heroImageBlockProps={{src: homeHero}}
        /> */}

        {/* <FilterBarSection config={filterBar}/> */}

        {/* <AboutSection data={homeAboutSection}/> */}

        {/* <WorkExperienceSection
        data={homeWorkExperienceSection}
        /> */}

        {/* <SkillsSection
          data={homeSkillsSection}
        /> */}

        <ProjectsSection
        data={projectsSection}
        />

        {/* <Modal
        open={true}
        >
          <div className='w-30 h-30 bg-red-500'></div>
        </Modal> */}


    </div>
  )
}


export default App

// textParts={[
//     { text: "Hello ", color: "primary" },
//     { text: "World", color: "heading" },
//     { text: "!", color: "heading" },
//   ]}
