import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/SectionTitle/SectionTitle';
import { Notification } from 'components/Notification/Notification';

export const FeedbackCounter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const onClickFeedback = options => {
    if (options === 'good') {
      setGood(prevGood => prevGood + 1);
    }

    if (options === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }

    if (options === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onClickFeedback={onClickFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
