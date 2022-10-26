import s from './message.module.css';

const Message = ({ author, text }) => {
  console.log({ author, text });

  return (
    <div className={s.messages}>
      <span>{ author }: </span> <span>{ text }</span>
    </div>
  );
};

export default Message;