import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Linking,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

export default function Privacy({navigation}) {
  const emailAddress = 'example@example.com';
  const [pictureDropDown, setPictureDropDown] = useState(false);
  const [slectedOpt1, setSlectedOpt1] = useState('Friends');

  const [profileDropDown, setProfileDropDown] = useState(false);
  const [slectedOpt2, setSlectedOpt2] = useState('Everyone');

  const [lastSeenDropDown, setLastSeenDropDown] = useState(false);
  const [slectedOpt3, setSlectedOpt3] = useState('Nobody');

  const handleSelectedOpt1 = selectedAns => {
    setSlectedOpt1(selectedAns);
    setPictureDropDown(false);
    console.log(slectedOpt1);
  };

  const handleSelectedOpt2 = selectedAns => {
    setSlectedOpt2(selectedAns);
    setProfileDropDown(false);
    console.log(slectedOpt2);
  };

  const handleSelectedOpt3 = selectedAns => {
    setSlectedOpt3(selectedAns);
    setLastSeenDropDown(false);
    console.log(slectedOpt3);
  };

  const handleChanges = () => {
    navigation.navigate('Account');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Privacy Policy'} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollBody}>
            <Text style={styles.textLight}>Last updated: March 28, 2024</Text>
            <Text style={styles.textLight}>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </Text>
            <Text style={styles.textLight}>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the Privacy Policy
              Generator.
            </Text>

            <View style={styles.section}>
              <Text style={styles.heading}>Definitions</Text>
              <Text style={styles.text}>
                For the purposes of this Privacy Policy:
              </Text>
              <Text style={styles.subHeading}>Account</Text>
              <Text style={styles.text}>
                means a unique account created for You to access our Service or
                parts of our Service.
              </Text>
              <Text style={styles.subHeading}>Affiliate</Text>
              <Text style={styles.text}>
                means an entity that controls, is controlled by or is under
                common control with a party, where "control" means ownership of
                50% or more of the shares, equity interest or other securities
                entitled to vote for election of directors or other managing
                authority.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>
                Collecting and Using Your Personal Data
              </Text>
              <Text style={styles.subHeading}>Types of Data Collected</Text>
              <Text style={styles.text}>Personal Data</Text>
              <Text style={styles.text}>
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </Text>
              <Text style={styles.listItem}>- Usage Data</Text>
              <Text style={styles.listItem}>- Email address</Text>
              <Text style={styles.listItem}>- First name and last name</Text>
              <Text style={styles.listItem}>- Phone number</Text>
              <Text style={styles.subHeading}>Usage Data</Text>
              <Text style={styles.text}>
                Usage Data is collected automatically when using the Service.
              </Text>
              <Text style={styles.text}>
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IPaddress), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.text}>
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </Text>
              <Text style={styles.text}>
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}>
                Information Collected while Using the Application
              </Text>
              <Text style={styles.text}>
                While using Our Application, in order to provide features of Our
                Application, We may collect, with Your prior permission:
              </Text>
              <Text style={styles.text}>
                - Information regarding your location
              </Text>
              <Text style={styles.text}>
                - Pictures and other information from your Device's camera and
                photo library
              </Text>
              <Text style={styles.text}>
                We use this information to provide features of Our Service, to
                improve and customize Our Service. The information may be
                uploaded to the Company's servers and/or a Service Provider's
                server or it may be simply stored on Your device.
              </Text>
              <Text style={styles.text}>
                You can enable or disable access to this information at any
                time, through Your Device settings.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>Delete Your Personal Data</Text>
              <Text style={styles.text}>
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You.
              </Text>
              <Text style={styles.text}>
                Our Service may give You the ability to delete certain
                information about You from within the Service.
              </Text>
              <Text style={styles.text}>
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
              </Text>
              <Text style={styles.text}>
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>Other Legal Requirements</Text>
              <Text style={styles.text}>
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </Text>
              <Text style={styles.text}>- Comply with a legal obligation</Text>
              <Text style={styles.text}>
                - Protect and defend the rights or property of the Company
              </Text>
              <Text style={styles.text}>
                - Prevent or investigate possible wrongdoing in connection with
                the Service
              </Text>
              <Text style={styles.text}>
                - Protect the personal safety of Users of the Service or the
                public
              </Text>
              <Text style={styles.text}>- Protect against legal liability</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>Security of Your Personal Data</Text>
              <Text style={styles.text}>
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </Text>
            </View>

            <Text style={styles.subHeading}>Types data we collect</Text>

            <Text style={styles.textLight}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text style={styles.textLight}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </Text>

            <Text style={styles.subHeading}>Use of your personal data</Text>

            <Text style={styles.textLight}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </Text>
            <Text style={styles.textLight}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </Text>

            <Text style={styles.subHeading}>
              Disclosure of your personal data
            </Text>

            <Text style={styles.textLight}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </Text>
            <Text style={styles.textLight}>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </Text>

            <Text style={styles.textLight}>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus
            </Text>

            <View style={styles.section}>
              <Text style={styles.heading}>Children's Privacy</Text>
              <Text style={styles.text}>
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </Text>
              <Text style={styles.text}>
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent's consent before We collect
                and use that information.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>Changes to this Privacy Policy</Text>
              <Text style={styles.text}>
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </Text>
              <Text style={styles.text}>
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                "Last updated" date at the top of this Privacy Policy.
              </Text>
              <Text style={styles.text}>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </Text>
            </View>

            {/* Contact Us */}
            <View style={Platform.OS == 'android' ? styles.section : styles.sectionIOS}>
              <Text style={styles.heading}>Contact Us</Text>
              <Text style={styles.text}>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </Text>
              <Text
                onPress={() => Linking.openURL(`mailto:${emailAddress}`)}
                style={{color: 'blue', textDecorationLine: 'underline'}}>
                {emailAddress}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
