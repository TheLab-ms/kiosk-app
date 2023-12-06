
import * as React from 'react';
import styles from '@/styles/AboutUs.module.css'

function AboutUsComponent() {
	
	return (
		
		<div className={styles.auDivStyle}>
		  <header className={styles.headerStyle}>
			<img
			  loading="lazy"
			  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb1105d1-0ae5-4dbd-8fb7-5d1c5d251b37?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
			  className={styles.auimage}
			/>
			<h1 className={styles.autext}>
			  About Us
			</h1>
		  </header>
		  <section className={styles.section}>
			<div className={styles.sectiondiv1}>
			  <div className={styles.sectiondiv2}>
				<div className={styles.sectiondiv3}>
				  <h2 className={styles.sectiondiv3h}>
					Interest Form
				  </h2>
				  <img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/5da2ee75-36f6-4139-9570-28e1ae72977d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
					className={styles.ifimage}
				  />
				  <img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bca0478-3ec0-47bb-b63e-8fc898103aaa?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
					className={styles.ifimage1}
				  />
				</div>
			  </div>
			  <div className={styles.sectiondiv4}>
				<div className={styles.sectiondiv5}/>
			  </div>
			  <div className={styles.sectiondiv6}>
				<div className={styles.sectiondiv7}>
				  <h2 className={styles.sectiondiv7h}>
					Contact Information
				  </h2>
				  <div className={styles.sectiondiv8}>
					<div className={styles.sectiondiv9}>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/30af869a-6595-4122-82cf-14e0ba39784e?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
						className={styles.ifimage2}
					  />
					</div>
					<div className={styles.sectiondiv11}>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/30af869a-6595-4122-82cf-14e0ba39784e?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
						className={styles.ifimage2}
					  />
					</div>
					<div className={styles.sectiondiv13}>
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/30af869a-6595-4122-82cf-14e0ba39784e?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
						className={styles.ifimage2}
					  />
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </section>
		  <footer className={styles.footer}>
			<div className={styles.footertext}>
			  <a className={styles.footertext2}>
				Go Back
			  </a>
			</div>
		  </footer>
		</div>
	  );
	

	// return (
	// 	<main className="mix-blend-lighten backdrop-blur-[50px] flex flex-col">
	// 	  <header className="flex w-[885px] max-w-full items-stretch justify-between gap-5 mt-2.5 px-5 max-md:flex-wrap">
	// 		<img
	// 		  loading="lazy"
	// 		  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4d04fbd-cb81-48ce-8c24-c40c1456d14d?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
	// 		  className="aspect-square object-contain object-center w-[75px] overflow-hidden shrink-0 max-w-full"
	// 		  alt="Logo"
	// 		/>
	// 		<h1 className="text-white text-6xl font-bold leading-[77px] grow shrink basis-auto mt-7 self-end max-md:text-4xl max-md:leading-[53px]">
	// 		  About Us
	// 		</h1>
	// 	  </header>
	// 	  <section className="self-stretch w-full mt-9 px-5 max-md:max-w-full">
	// 		<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
	// 		  <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
	// 			<div className="bg-neutral-700 flex grow flex-col items-center w-full mx-auto pl-8 pr-8 pt-8 pb-12 rounded-3xl max-md:mt-9 max-md:px-5">
	// 			  <h2 className="text-white text-center text-5xl font-semibold leading-[58px] max-w-[301px] max-md:text-4xl max-md:leading-[54px]">
	// 				Interest Form
	// 			  </h2>
	// 			  <img
	// 				loading="lazy"
	// 				src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bd8db2-4072-478e-8b8b-02634b8cedea?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
	// 				className="aspect-[2.41] object-contain object-center w-full fill-white overflow-hidden self-stretch mt-7"
	// 				alt="Image 1"
	// 			  />
	// 			  <img
	// 				loading="lazy"
	// 				src="https://cdn.builder.io/api/v1/image/assets/TEMP/04d7818f-e012-4d41-8637-34cfe5142bde?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
	// 				className="aspect-[1.04] object-contain object-center w-full overflow-hidden self-stretch mt-7"
	// 				alt="Image 2"
	// 			  />
	// 			</div>
	// 		  </div>
	// 		  <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
	// 			<div className="bg-neutral-700 flex w-[644px] shrink-0 h-[671px] flex-col mx-auto rounded-3xl max-md:max-w-full max-md:mt-9" />
	// 		  </div>
	// 		  <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
	// 			<div className="bg-neutral-700 flex grow flex-col items-stretch w-full mx-auto pl-8 pr-8 pt-7 pb-12 rounded-3xl max-md:mt-8 max-md:px-5">
	// 			  <h2 className="rotate-[-0.294deg] text-white text-center text-5xl font-semibold leading-[58px] max-md:text-4xl max-md:leading-[54px]">
	// 				Contact Information
	// 			  </h2>
	// 			  <div className="bg-white flex flex-col items-stretch mt-8 pl-3 pr-2 py-5 rounded-3xl">
	// 				<div className="bg-neutral-700 flex flex-col items-center px-5 py-6 rounded-3xl">
	// 				  <div className="flex w-[101px] shrink-0 h-[98px] flex-col rounded-[50%]" />
	// 				</div>
	// 				<div className="bg-neutral-700 flex flex-col items-center mt-1.5 px-5 py-12 rounded-3xl">
	// 				  <div className="bg-lime-300 flex w-[134px] shrink-0 h-[34px] flex-col rounded-3xl" />
	// 				</div>
	// 				<div className="bg-neutral-700 flex flex-col items-center mt-3 px-5 py-5 rounded-3xl">
	// 				  <img
	// 					loading="lazy"
	// 					src="https://cdn.builder.io/api/v1/image/assets/TEMP/954c6aa9-7795-47f9-8614-c680c7f66917?apiKey=b7bb950c491b4bddbd4de63fccd5e47e&"
	// 					className="aspect-[1.37] object-contain object-center w-[134px] overflow-hidden max-w-full"
	// 					alt="Image 3"
	// 				  />
	// 				</div>
	// 			  </div>
	// 			</div>
	// 		  </div>
	// 		</div>
	// 	  </section>
	// 	  <footer className="border bg-neutral-700 self-stretch flex w-full flex-col mt-5 mb-2 py-5 border-solid border-white max-md:max-w-full">
	// 		<a
	// 		  href="#"
	// 		  className="text-neutral-700 text-8xl leading-[158px] whitespace-nowrap bg-lime-300 w-[353px] max-w-full items-center px-5 py-8 rounded-xl max-md:text-4xl max-md:leading-[82px]"
	// 		>
	// 		  Go Back
	// 		</a>
	// 	  </footer>
	// 	</main>
	//   );

	
}

export default AboutUsComponent;
