import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ISelectProductMenu } from "../../interfaces";
interface IProps {
  selected: ISelectProductMenu;
  setSelected: (selected: ISelectProductMenu) => void;
  menu: ISelectProductMenu[];
}
export default function ListMenu({ selected, setSelected, menu }: IProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label className="block text-md  font-medium leading-6 text-gray-900">
        Category
      </Listbox.Label>
      <div className="relative mt-2 mb-5">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <img
              alt={selected.name}
              src={selected.imageURL}
              className="h-5 w-5 flex-shrink-0 rounded-full"
            />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {menu.map((person) => (
            <ListboxOption
              key={person.name}
              value={person}
              className={({ active, selected }) =>
                `relative cursor-default select-none py-2 pl-3 pr-9 ${
                  active ? "bg-indigo-600 text-white" : "text-gray-900"
                }`
              }
            >
              {({ selected }) => (
                <>
                  <div className="flex items-center">
                    <img
                      alt={person.name}
                      src={person.imageURL}
                      className="h-5 w-5 flex-shrink-0 rounded-full object-center"
                    />
                    <span
                      className={`ml-3 block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                  </div>

                  {selected && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
