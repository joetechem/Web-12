//
//  ToyBoxConnector.swift
//  PlaygroundContent
//
//  Created by Jordan Hesse on 2017-04-25.
//  Copyright © 2017 Sphero Inc. All rights reserved.
//

import UIKit
import CoreBluetooth
import PlaygroundBluetooth

public struct ToyBoxConnectorItem {
    private(set) var prefix: String
    private(set) var defaultName: String
    private(set) var icon: UIImage
}

private let defaultSignalThreshold = 92

class ToyBoxConnector: PlaygroundBluetoothConnectionViewDelegate, PlaygroundBluetoothConnectionViewDataSource {
    
    private let items: [ToyBoxConnectorItem]
    private let signalThreshold: Int
    
    private let issueIcon = UIImage(named: "connection-problem")!

    init(items: [ToyBoxConnectorItem], signalThreshold: Int = defaultSignalThreshold) {
        self.items = items
        if UIDevice.current.userInterfaceIdiom == .pad {
            self.signalThreshold = signalThreshold - 6
        } else {
            self.signalThreshold = signalThreshold
        }
    }
    
    public func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, shouldDisplayDiscovered peripheral: CBPeripheral, withAdvertisementData advertisementData: [String : Any]?, rssi: Double) -> Bool {
        guard rssi < 0.0 && rssi > -70.0 else { return false }
        guard let advertisementData = advertisementData else { return false }
        guard let advertisedPower = advertisementData[CBAdvertisementDataTxPowerLevelKey] as? NSNumber else { return false }
        
        let toyDescriptor = ToyDescriptor(name: peripheral.name, identifier: peripheral.identifier, rssi: Int(rssi), advertisedPower:advertisedPower.intValue)
        return isSuitableToy(with: toyDescriptor)
    }
    
    public func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, shouldConnectTo peripheral: CBPeripheral, withAdvertisementData advertisementData: [String : Any]?, rssi: Double) -> Bool {
        return true
    }
    
    public func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, willDisconnectFrom peripheral: CBPeripheral) {
    }
    
    public func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, titleFor state: PlaygroundBluetoothConnectionView.State) -> String {
        switch state {
        case .noConnection:
            return NSLocalizedString("connection.view.noConnection", value: "Connect Robot", comment: "Connection view state -- not connected")
        case .connecting:
            return NSLocalizedString("connection.view.connecting", value: "Connecting Robot", comment: "Connection view state -- connecting")
        case .searchingForPeripherals:
            return NSLocalizedString("connection.view.searching", value: "Searching for Robots", comment: "Connection view state -- searching for robots")
        case .selectingPeripherals:
            return NSLocalizedString("connection.view.selecting", value: "Select a Robot", comment: "Connection view state -- selecting a robot")
        case .connectedPeripheralFirmwareOutOfDate:
            return NSLocalizedString("connection.view.firmwareoutofdate", value: "Connect to a Different Robot", comment: "Connection view state -- Robot cannot be used")
        }
    }
    
    public func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, firmwareUpdateInstructionsFor peripheral: CBPeripheral) -> String {
        return NSLocalizedString("connection.firmware.instructions", value: "Download the [Sphero Edu app](x-playgrounds-launch-app://com.sphero.sprk?iTunesID=1017847674) and connect your robot to update its firmware.", comment: "Instructions to update firmware")
    }
    
    public func connectionView(_ connectionView: PlaygroundBluetoothConnectionView, itemForPeripheral peripheral: CBPeripheral, withAdvertisementData advertisementData: [String : Any]?) -> PlaygroundBluetoothConnectionView.Item {
        let name = peripheral.name ?? NSLocalizedString("connection.view.unknown", value: "???", comment: "Name of unknown robot type")
        for item in items {
            if name.hasPrefix(item.prefix) {
                return PlaygroundBluetoothConnectionView.Item(name: name, icon: item.icon, issueIcon: issueIcon, firmwareStatus: .upToDate)
            }
        }
        return PlaygroundBluetoothConnectionView.Item(name: name, icon: issueIcon, issueIcon: issueIcon, firmwareStatus: .upToDate)
    }
    
    func isSuitableToy(with descriptor: ToyDescriptor) -> Bool {
        guard descriptor.signalStrength() > signalThreshold else { return false }
        
        guard let name = descriptor.name else { return false }
        for item in items {
            if name.hasPrefix(item.prefix) {
                return true
            }
        }
        
        return false
    }
    
}
