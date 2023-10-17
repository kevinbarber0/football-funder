interface AccountDetailPropsType {
  name: string;
  number: number;
  code: string;
}

export const AccountDetail: React.FC<AccountDetailPropsType> = ({
  code,
  name,
  number,
}) => {
  return (
    <div className="relative">
      <div className="relative group cursor-pointer text-sm text-green-70 underline">
        View account details
        <div
          className="absolute w-[300px] border-[1px] border-gray-20 shadow-md rounded-10
                    top-[30px] p-2.5 bg-white text-sm hidden group-hover:block z-30"
        >
          <div className="relative">
            <div className="absolute -top-[17px] left-[50px] w-3 h-3 border-l-[1px] border-t-[1px] border-gray-20 rotate-45 bg-white"></div>
            <div className="w-fit">
              Bank account name: {name}
              <br />
              Account number: {number}
              <br />
              Sort code: {code}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
