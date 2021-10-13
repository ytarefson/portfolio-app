import React from 'react'
import Link from 'next/link';

const PostCard = (props) => {
  return (
    <>
      <Link href={`/news/${props.post.handle}/`}>
        <a className="post-card">
          <div className="top-content">
            <div className="grid-row mb-3">
              {props.post.hashtags.map((hashtag) => (
                <span key={`hashtag-${hashtag.name}`} className="hashtag min-text mb-0">{hashtag.name}</span>
              ))}
            </div>
            <span className="min-title">{props.post.caption}</span>
          </div>
          <div className="bottom-content">
            <div className="flex-row">
              <span className="mid-text date mb-0">{new Date(props.post.createdAt).toLocaleDateString("ru-RU",{ year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <div className={`text importance mb-0 ${props.post.importance}`}>
                {props.post.importance}
              </div>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .post-card {
          text-decoration: none;
          padding: 20px;
          background-color: var(--grey-0);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: box-shadow 0.2s ease-out;
        }
        .post-card:hover {
          box-shadow: 5px 5px 30px rgba(0,0,0,0.2);
        }
        .flex-row {
          display: flex;
          justify-content: space-between;
        }
        .grid-row {
          width: auto;
          display: grid;
          gap: 12px;
          grid-auto-rows: auto;
          grid-template-columns: repeat(auto-fit, minmax(40px, auto));
          justify-content: start;
        }
        .hashtag {
          color: var(--grey-4);
        }
        .min-title {
          margin-bottom: 30px;
          color: var(--grey-7);
        }
        .date {
          color: var(--grey-4);
        }
        .importance {
          font-weight: 700;
          text-align: right;
          margin-right: 0;
        }
        .low {
          color: #07b607;
        }
        .middle {
          color: #caca14;
        }
        .high {
          color: var(--main);
        }
      `}</style>
    </>
  )
}

export default PostCard;