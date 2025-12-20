import { 
    projectsCarouselSampleSlide1,
    projectsCarouselSampleSlide2,
    projectsCarouselSampleSlide3,
    projectsCarouselSampleSlide4,
    projectsCarouselSampleSlide5,
    projectsCarouselSampleSlide6,
    projectsCarouselSampleSlide7,
    projectsCarouselSampleSlide8
} from '../../assets/images/projectscarouselsample';

import { 
    ArrowBottomIcon,
    ArrowLeftIcon, 
    ArrowRightIcon, 
    FullscreenIcon, 
    OverlayCloseIcon, 
    OverlayFigmaIcon, 
    OverlayGitIcon, 
    OverlayPlayIcon
} from '../../assets/icons/system';

export const homeProjectsCarousel = {
    slides: [
        {
            id: "slide-1",
            src: projectsCarouselSampleSlide1,
            alt: "projectsCarouselSampleSlide1"
        },
        {
            id: "slide-2",
            src: projectsCarouselSampleSlide2,
            alt: "projectsCarouselSampleSlide2"
        },
        {
            id: "slide-3",
            src: projectsCarouselSampleSlide3,
            alt: "projectsCarouselSampleSlide3"
        },
        {
            id: "slide-4",
            src: projectsCarouselSampleSlide4,
            alt: "projectsCarouselSampleSlide4"
        },
        {
            id: "slide-5",
            src: projectsCarouselSampleSlide5,
            alt: "projectsCarouselSampleSlide5"
        },
        {
            id: "slide-6",
            src: projectsCarouselSampleSlide6,
            alt: "projectsCarouselSampleSlide6"
        },
        {
            id: "slide-7",
            src: projectsCarouselSampleSlide7,
            alt: "projectsCarouselSampleSlide7"
        },
        {
            id: "slide-8",
            src: projectsCarouselSampleSlide8,
            alt: "projectsCarouselSampleSlide8"
        }
    ],

    buttonProps: [
        {
            id: "arrow-left",
            role: "navigation",
            variant: "iconOnlyCircularOverlay",
            label: "",
            iconLeft: ArrowLeftIcon,
            onClick: () => {},
        },
        {
            id: "arrow-right",
            role: "navigation",
            variant: "iconOnlyCircularOverlay",
            label: "",
            iconLeft: ArrowRightIcon,
            onClick: () => {},
        },
         {
            id: "arrow-down",
            role: "navigation",
            variant: "iconOnlyCircularOverlay",
            label: "",
            iconLeft: ArrowBottomIcon,
            onClick: () => {},
        },
        {
            id: "fullscreen",
            role: "utility",
            variant: "iconOnlyRectangularOverlay",
            label: "",
            iconLeft: FullscreenIcon,
            onClick: () => {},
        },
        {
            id: "close-fullscreen",
            role: "utility",
            variant: "iconOnlyRectangularOverlay",
            label: "",
            iconLeft: OverlayCloseIcon,
            onClick: () => {},
        },
        {
            id: "github",
            role: "cta",
            variant: "overlayDefault",
            label: "Source Code",
            iconLeft: OverlayGitIcon,
            orderFullscreen: 1,
            onClick: () => {},
        },
        {
            id: "figma",
            role: "cta",
            variant: "overlayDefault",
            label: "Design File",
            iconLeft: OverlayFigmaIcon,
            orderFullscreen: 2,
            onClick: () => {},
        },
        {
            id: "live-demo",
            role: "cta",
            variant: "overlayDefault",
            label: "Live Demo",
            iconLeft: OverlayPlayIcon,
            orderFullscreen: 0,
            onClick: () => {},
        },
    ]
};