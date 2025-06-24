"use client";

const Accordion = ({ icon, titles }) => {
    //тут бы тоже использовать библиотеку готовых компонентов
    return (
        <div className="flex flex-col">
            {titles.map((text, index) => (
                <div key={index} className="w-full border-b border-[var(--grayscale-100)] py-[16px] flex items-center justify-between cursor-pointer">
                    <span className="text-base font-medium text-[var(--grayscale-900)]">{text}</span>
                    {icon && <span style={{ transform: 'rotate(180deg)' }}>{icon}</span>}
                </div>)
            )}
        </div>
  );
};

export default Accordion; 