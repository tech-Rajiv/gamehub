import React from 'react'

function Info() {
  return (
    <div className="add px-2 py-2 flex justify-center gap-2 sm:gap-8 text-sm mt-15 outline items-center">
    <div className="">
      <i class="ri-git-repository-private-line mr-2"></i>100% safe
    </div>
    <div className="w-[2px] min-h-10 bg-gray-300"></div>
    <div className="">
      <i className="ri-money-rupee-circle-line mr-2"></i>free 200rs for new
      players
    </div>
    <div className="w-[2px] min-h-10 bg-gray-300"></div>
    <div>
      <i className="ri-wallet-line mr-2"></i>instant Cash Withdrawal
    </div>
  </div>
  )
}

export default Info