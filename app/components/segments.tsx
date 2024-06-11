export function Segments() {
  return (
    <>
      <section className="bg-gray-200 flex items-center justify-center py-10 lg:py-40">
        <div className="max-w-5xl p-4">
          <h1 className=" flex justify-center text-xl font-medium text-gray-600 md:text-3xl lg:text-4xl">
            O Sistema ERP ideal para
          </h1>

          <div className="flex flex-col justify-center items-center p-4 gap-4 md:flex-row">
            <div className="w-60 max-w-xs rounded-2xl bg-white shadow-lg hover:shadow-2xl p-6 sm:p-10 md:my-8 lg:w-80">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-800 p-2 lg:h-24 lg:w-24 lg:p-4">
                <img
                  className="h-auto w-full object-cover"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWN0b3J5Ij48cGF0aCBkPSJNMiAyMGEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOGwtNyA1VjhsLTcgNVY0YTIgMiAwIDAgMC0yLTJINGEyIDIgMCAwIDAtMiAyWiIvPjxwYXRoIGQ9Ik0xNyAxOGgxIi8+PHBhdGggZD0iTTEyIDE4aDEiLz48cGF0aCBkPSJNNyAxOGgxIi8+PC9zdmc+"
                  alt="Imagem do Card 1"
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <p className="text-center text-xl font-bold text-gray-600 lg:text-3xl">
                  Industria
                </p>
              </div>
            </div>

            <div className="w-60 max-w-xs rounded-2xl bg-white shadow-lg hover:shadow-2xl p-6 sm:p-10 md:my-8 lg:w-80">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-800 p-2 lg:h-24 lg:w-24 lg:p-4">
                <img
                  className="h-full w-full object-cover"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZWFydC1wdWxzZSI+PHBhdGggZD0iTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WiIvPjxwYXRoIGQ9Ik0zLjIyIDEySDkuNWwuNS0xIDIgNC41IDItNyAxLjUgMy41aDUuMjciLz48L3N2Zz4="
                  alt="Imagem do Card 2"
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <p className="text-center text-xl font-bold text-gray-600 lg:text-3xl">
                  Saúde
                </p>
              </div>
            </div>
            <div className="w-60 max-w-xs rounded-2xl bg-white shadow-lg hover:shadow-2xl p-6 sm:p-10 md:my-8 lg:w-80">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-800 p-2 lg:h-24 lg:w-24 lg:p-4">
                <img
                  className="h-full w-full object-cover"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYWNrYWdlIj48cGF0aCBkPSJtNy41IDQuMjcgOSA1LjE1Ii8+PHBhdGggZD0iTTIxIDhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M2w3IDRhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2WiIvPjxwYXRoIGQ9Im0zLjMgNyA4LjcgNSA4LjctNSIvPjxwYXRoIGQ9Ik0xMiAyMlYxMiIvPjwvc3ZnPg=="
                  alt="Imagem do Card 3"
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <p className="text-center text-xl font-bold text-gray-600 lg:text-3xl">
                  Distribuição
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
