import Image from "next/image";

export default function Profile() {
    return (
        <Image
            src="https://i.imgur.com/MK3eW3Am.jpg"
            width={100}
            height={100}
            alt="Katherine Johnson"
            style={{
                maxWidth: "100%",
                height: "auto",
                margin: "13px",
            }}
        />
    );
}
