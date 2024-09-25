import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';

export default function TruncatedTextTwo({text, maxWords}) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const renderText = () => {
    const words = text?.split(' ');

    if (showFullText || words?.length <= maxWords) {
      return text;
    } else {
      const truncatedText = words?.slice(0, maxWords).join(' ');
      return truncatedText + '...';
    }
  };

  return (
    <View>
      <Text style={styles.aboutText}>
        {renderText()}
        {text?.split(' ').length > maxWords && (
          <Text onPress={toggleShowFullText} style={styles.aboutSeeMoreText}>
            {showFullText ? ' See Less' : ' See More'}
          </Text>
        )}
      </Text>
    </View>
  );
}
