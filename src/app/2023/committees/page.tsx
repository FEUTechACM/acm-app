"use client";
import HomeWide from "@/components/2023/_gen/wide/HomeWide";
import { Image } from "@nextui-org/react";
import dynamic from "next/dynamic";
import NextImage from "next/image";
import {
	Execs,
	Groups,
	Marketing,
	Programs,
} from "public/2023/media/img/officers";
const ParticleSnow = dynamic(
	() => import("@/components/particles/ParticleSnow"),
);
const Committees = () => {
	return (
		<HomeWide>
			<ParticleSnow />
			<h2 className="z-10 text-center text-balance">FEU Tech ACM 23-24</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Groups.map((grp, index) => (
					<a href={grp.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={400}
							height={400}
							src={grp.src}
							quality={25}
							className="aspect-auto"
							priority
							alt="FEU Tech ACM 23-24"
						/>
					</a>
				))}
			</div>
			<h2 className="z-10">Executives</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Execs.map((exec, index) => (
					<a href={exec.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={300}
							height={300}
							quality={25}
							src={exec.src}
							alt="FEU Tech ACM 23-24 Executives"
						/>
					</a>
				))}
			</div>
			<h2 className="z-10">Programs</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Programs.map((pgr, index) => (
					<a href={pgr.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={300}
							height={300}
							quality={25}
							src={pgr.src}
							alt="FEU Tech ACM 23-24 Programs"
						/>
					</a>
				))}
			</div>
			<h2 className="z-10">Marketing</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Marketing.map((mkt, index) => (
					<a href={mkt.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={300}
							height={300}
							quality={25}
							src={mkt.src}
							alt="FEU Tech ACM 23-24 Marketing"
						/>
					</a>
				))}
			</div>
			<p className="z-10 text-center text-balance">
				Copyright FEU Tech ACM Student Chapter. All rights reserved.
			</p>
		</HomeWide>
	);
};

export default Committees;
