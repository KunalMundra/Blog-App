"use client";

import Image from 'next/image'
import styles from './writePage.module.css'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useState } from 'react'

const WritePage = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className={styles.container}>
            <input type='text' placeholder='Title' className={styles.input}/>
            <div className={styles.editor} >
                <button className={styles.button} onClick={() =>{setOpen(!open)}}>
                    <Image src="/plus.png" alt="" height={16} width={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" height={16} width={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" height={16} width={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" height={16} width={16} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                />
            </div>
            <div className={styles.publish}>Publish</div>
        </div>
    )
}

export default WritePage