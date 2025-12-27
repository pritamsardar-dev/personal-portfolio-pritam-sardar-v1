import { DropdownIcon } from "../../assets/icons/system";

export const filterBar = {
    selectProps: {
        variant: "selectCustom",
        label: "",
        name: "choice",
        placeholder: "Select one",
        options: [
            { value: "option1", label: "Option One" },
            { value: "option2", label: "Option Two" },
            { value: "option3", label: "Option Three" },
        ],
        Icon: DropdownIcon,
        error: "",
    },

    clearButtonProps: {
        id: "action-clear",
        variant: "tag",
        label: "Clear",
        onClick: () => {}
    },

    primaryFiltersProps: [
        {
            id: "primary-filter-all",
            variant: "tag",
            label: "All",
            count: 12,
            onClick: () => {}
        },
        {
            id: "primary-filter-mern",
            variant: "tag",
            label: "MERN",
            count: 5,
            onClick: () => {}
        },
        {
            id: "primary-filter-frontend",
            variant: "tag",
            label: "Frontend",
            count: 4,
            onClick: () => {}
        },
        {
            id: "primary-filter-backend",
            variant: "tag",
            label: "Backend",
            count: 3,
            onClick: () => {}
        },
        {
            id: "primary-filter-full-Stack",
            variant: "tag",
            label: "Full-Stack",
            count: 5,
            onClick: () => {}
        },
    ],

    secondaryFiltersProps: [
        {
            id: "secondary-filter-ai-ml",
            variant: "tag",
            label: "AI/ML",
            count: 2,
            onClick: () => {}
        },
        {
            id: "secondary-filter-data apps",
            variant: "tag",
            label: "Data Apps",
            count: 3,
            onClick: () => {}
        },
        {
            id: "secondary-filter-api-dev",
            variant: "tag",
            label: "API Dev",
            count: 4,
            onClick: () => {}
        },
        {
            id: "secondary-filter-real-time",
            variant: "tag",
            label: "Real-Time",
            count: 3,
            onClick: () => {}
        }
    ],
};
