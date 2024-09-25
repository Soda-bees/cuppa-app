import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {Image, Text, TouchableOpacity, View, Platform} from 'react-native';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';
// import { ProgressChart } from 'react-native-chart-kit'

export default function AdminOrdersOverview() {
  const [modal, setModal] = useState(false);

  const [orders, setOrders] = useState([
    {
      coffee: 'Latte',
      amount: 2,
      price: 4.5,
      date: 'Oct.24',
      time: '10:30',
      status: 'Ready',
    },
    {
      coffee: 'Espresso',
      amount: 1,
      price: 2.5,
      date: 'Oct.24',
      time: '2:45',
      status: 'Pending',
    },
    {
      coffee: 'Espresso',
      amount: 1,
      price: 2.5,
      date: 'Oct.24',
      time: '2:45',
      status: 'Pending',
    },
    {
      coffee: 'Espresso',
      amount: 1,
      price: 2.5,
      date: 'Oct.24',
      time: '2:45',
      status: 'Pending',
    },
    // Add more transactions as needed
  ]);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Orders Overview'} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#287C76', '#60B0AA']}
          style={styles.header}>
          <Text style={styles.headerText}>Item</Text>
          <View style={styles.headerSubview}>
            <Text style={styles.headerText}>Qty.</Text>
            <Text style={styles.headerText}>Price</Text>
            <Text style={styles.headerText}>Date</Text>
            <Text style={styles.headerText}>Status</Text>
          </View>
        </LinearGradient>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.chartHeading}>
            <Text style={styles.heading}>New Orders</Text>
            <TouchableOpacity>
              <Text
                style={
                  Platform.OS == 'android' ? styles.viewBtn : styles.viewBtnIOS
                }>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {orders.map((order, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setModal(true);
                }}>
                <View style={styles.orderContainer}>
                  <Text style={styles.coffeeText}>{order.coffee} </Text>
                  <View style={styles.orderContainerChild}>
                    <Text style={styles.orderElement}>{order.amount} </Text>
                    <Text style={styles.orderPrice}>${order.price} </Text>
                    <View style={styles.timeView}>
                      <Text style={styles.orderElement}>{order.date} </Text>
                      <Text style={styles.orderTime}>{order.time} </Text>
                    </View>
                    <Text style={styles.orderStatus}>{order.status} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.chartHeading}>
            <Text style={styles.heading}>First Coffee Offer</Text>
            <TouchableOpacity>
              <Text
                style={
                  Platform.OS == 'android' ? styles.viewBtn : styles.viewBtnIOS
                }>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {orders.map((order, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setModal(true);
                }}>
                <View style={styles.orderContainer}>
                  <Text style={styles.coffeeText}>{order.coffee} </Text>
                  <View style={styles.orderContainerChild}>
                    <Text style={styles.orderElement}>{order.amount} </Text>
                    <Text style={styles.orderPrice}>${order.price} </Text>
                    <View style={styles.timeView}>
                      <Text style={styles.orderElement}>{order.date} </Text>
                      <Text style={styles.orderTime}>{order.time} </Text>
                    </View>
                    <Text style={styles.orderStatus}>{order.status} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.chartHeading}>
            <Text style={styles.heading}>Cancelled</Text>
            <TouchableOpacity>
              <Text
                style={
                  Platform.OS == 'android' ? styles.viewBtn : styles.viewBtnIOS
                }>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {orders.map((order, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setModal(true);
                }}>
                <View style={styles.orderContainer}>
                  <Text style={styles.coffeeText}>{order.coffee} </Text>
                  <View style={styles.orderContainerChild}>
                    <Text style={styles.orderElement}>{order.amount} </Text>
                    <Text style={styles.orderPrice}>${order.price} </Text>
                    <View style={styles.timeView}>
                      <Text style={styles.orderElement}>{order.date} </Text>
                      <Text style={styles.orderTime}>{order.time} </Text>
                    </View>
                    <Text style={styles.orderStatus}>{order.status} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={Platform.OS == 'ios' && styles.marginBottom}></View>
        </ScrollView>
        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#287C76', '#60B0AA']}
              style={styles.btnContainer2}>
              <Image source={images.fileReport} style={styles.basicIconL} />
              <Text style={styles.buttonText2}>Export Data</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={modal}
        style={styles.modalParent}
        onBackdropPress={() => {
          setModal(false);
        }}>
        <View
          style={
            Platform.OS == 'android'
              ? styles.modalContainer
              : styles.modalContainerIOS
          }>
          <View style={styles.modalHeader}>
            <View style={styles.divider} />
            <Text style={styles.modalHeading}>Picked Up</Text>
            <View style={styles.modalpickupinfo}>
              <Image
                source={images.location2}
                style={
                  Platform.OS == 'android'
                    ? styles.basicIcon
                    : styles.basicIconIOS
                }
              />
              <Text style={styles.textGray}>NY, New York</Text>
              <Image
                source={images.star}
                style={
                  Platform.OS == 'android'
                    ? styles.basicIcon
                    : styles.basicIconIOS
                }
              />
              <Text style={styles.textGray}>4.0</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.flexRow}>
              <Image source={images.papercup} style={styles.basicIcon} />
              <Text style={styles.itemText}>Flat White</Text>
            </View>
            <Text style={styles.amountText}>1x</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.flexRow}>
              <Image source={images.scooter} style={styles.basicIcon} />
              <Text style={styles.itemText}>Delivery Charges</Text>
            </View>
            <Text style={styles.amountText}>$2</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.flexRow}>
              <Image source={images.bill} style={styles.basicIcon} />
              <Text style={styles.amountText}>Total</Text>
            </View>
            <Text style={styles.greenText}>$13.00</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.flexRow}>
              <Text style={styles.textGray}>Paid With</Text>
            </View>
            <Text style={styles.amountText}>Card</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
